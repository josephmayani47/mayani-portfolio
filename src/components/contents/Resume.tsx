
function Resume() {
  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <iframe
        src="/public/resume.pdf"
        title="Resume Preview"
        width="100%"
        height="100%"
        style={{ border: "none" }}
      />
    </div>
  );
};

export default Resume;