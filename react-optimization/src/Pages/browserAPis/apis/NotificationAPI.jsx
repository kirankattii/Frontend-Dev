export default function NotifyUser() {
  const notify = () => {
    Notification.requestPermission().then((perm) => {
      if (perm === "granted") {
        new Notification("Hello from React!");
      }
    });
  };

  return (
    <button
      className="rounded-xl p-2 text-xl bg-gray-300 border border-blue-300"
      onClick={notify}
    >
      Notify
    </button>
  );
}
