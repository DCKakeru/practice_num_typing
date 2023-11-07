import ViewHeader from "../modules/Header";
import ViewDigit from "../modules/Digit";
import StartButton from "../modules/StartButton";

function Start() {
    var digit = 0;
    return (
        <div className="App">
          <header className="App-header">
            <ViewHeader />
          </header>
          <main>
            <ViewDigit digit={digit}/>
            <StartButton/>
          </main>
        </div>
      );
}

export default Start;