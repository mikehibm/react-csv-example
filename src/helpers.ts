async function readFileAsText(file: Blob): Promise<string> {
  return new Promise<string>((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = () => reject(reader.error);
    reader.onload = () => resolve((reader.result as string) || '');
    reader.readAsText(file);
  });
}

function mapCSVToArray(csv: string): string[][] {
  return csv.split('\n').map((row) => row.split(','));
}

export { readFileAsText, mapCSVToArray };
