export default function DownloadFile() {
  const download = () => {
    const blob = new Blob(["Hello from React!"], { type: "text/plain" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "hello.txt";
    a.click();
    URL.revokeObjectURL(url);
  };

  return <button onClick={download}>Download Text File</button>;
}
