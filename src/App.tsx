import "/dist/output.css";
import ToggleContent from "./ToggleContent";
function App() {
  return (
    <>
      <div className="flex flex-col gap-4 justify-center align-middle w-full min-h-screen text-center px-2" id="ok">
        <p className="fixed top-0 right-0 text-white"><a href="#">Hello</a></p>
        <p className="text-center text-white font-bold text-6xl md:text-8xl h-fit">
          Hello World!
        </p>
        <p className="text-neutral-700 font-bold min-h">This is a test to see whether a React and Tailwind project on Github will be hosted by Vercel or Netlify</p>
      </div>
      <ToggleContent />
    </>
  );
}

export default App;
