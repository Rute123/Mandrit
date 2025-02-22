function createRamDB(baseName);
seq = readTab([baseName '.txt'], 'trash.txt');
onsetList = Segment_ZCR_FixBpm([baseName '.wav'], 90, 0.75, seq);
writeSegsNChordsFile(baseName, onsetList);
writeChromaFile(baseName, onsetList);
writeSeqFile(baseName, onsetList);

%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

% Write _SegsNChords.db file
function writeSegsNChordsFile(baseName, onsetList)
fileName = [baseName '.wav'];
outputFileName = [baseName '_SegsNChords.db'];
ofn = fopen(outputFileName, 'wt');
fprintf('version: 2.0\n');
for i=1:length(onsetList)
    % <fileName>    <beat>  <sample>    <chord>
    %   where i starts in beat = 2, so beat = i + 1
    fprintf(ofn, '%s\t%d\t%d\t%d\n', fileName, i+1, onsetList(i).begin, onsetList(i).chord);
end
fclose(ofn);

%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

% Write _Chroma.db file
function writeChromaFile(baseName, onsetList)
fileName = [baseName '.wav'];
dbName = [baseName '_Chroma.db'];
mkdir('tempSegs');
ind = [1;2;3;4;5;6;7;8;9;10;11;12];
chromaFile = fopen(dbName,'wt');
if(~isempty(findstr(lower(fileName),'.wav')))
    [w, nb, fr] = wavread(fileName);
    for k=1:length(onsetList) - 1
        firstSample = onsetList(k).begin;
        lastSample = onsetList(k+1).begin - 1;
        wavLength = lastSample-firstSample+1;
        h = hann(wavLength);
        w2 = w(firstSample:lastSample,1);
        newWavLength = 2^(ceil(log2(wavLength)));
        w3 = zeros(newWavLength, 1);
        nNewSamples = newWavLength - wavLength;
        halfNNS = ceil(nNewSamples/2);
        w3(halfNNS:halfNNS+wavLength-1) = h.*w2;
        tempFileName = sprintf('tempSegs\\%s_%0.3d.wav',baseName,k);
        wavwrite(w3, nb, fr, tempFileName);
        [chromaSimple, chromaLinWeighted, chromaExpWeighted] = wav2chr(tempFileName);
        fprintf(chromaFile, '%s\t %0.3d\n\r',fileName,k+1);
        for j=1:12
            fprintf(chromaFile, ' %0.4f', chromaSimple(j));
        end
        fprintf(chromaFile, '\n\r');      
        for j=1:12
            fprintf(chromaFile, ' %0.4f', chromaLinWeighted(j));
        end
        fprintf(chromaFile, '\n\r');      
        for j=1:12
            fprintf(chromaFile, ' %0.4f', chromaExpWeighted(j));
        end
        fprintf(chromaFile, '\n\r');      
        ordered = indexsort(chromaExpWeighted, ind);
        for j=1:12
            fprintf(chromaFile, ' %d', ordered(j));
        end
        fprintf(chromaFile, ' \n\r');      
    end
end
fclose(chromaFile);
%% cleaning...
cd('tempSegs');
files = dir;
for i=3:length(files)
    delete(files(i).name);
end
cd ..
rmdir('tempSegs')

%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

% Write _Seq.db file
function writeSeqFile(baseName, onsetList)
seqFileName = [baseName '_Seq.db'];
ofn = fopen(seqFileName, 'wt');
fprintf(ofn, '255\n');
for i=1:length(onsetList)
    fprintf(ofn, '%d\n', onsetList(i).chord);
end
fclose(ofn);
