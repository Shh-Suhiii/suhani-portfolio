import Container from "./Container";

export default function Footer() {
  return (
    <footer className="border-t py-10 text-sm text-neutral-600">
      <Container>
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Suhani Rai. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="mailto:suhaniraisr01@gmail.com" className="hover:underline">
              Email
            </a>
            <a href="https://github.com/Shh-Suhiii" target="_blank" className="hover:underline">
              GitHub
            </a>
            {/* Add LinkedIn when ready */}
          </div>
        </div>
      </Container>
    </footer>
  );
}