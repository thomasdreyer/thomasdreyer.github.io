import me from './me.png';
import MyStory from './MyStory';
import MyWork from './MyWork';

export default function Content(props) {
  return (
    <div className="content" ref={props.storyRef}>
      <div style={{ marginTop: 100 }}>
        <div className="divRow">
          <MyStory />
          <div className="divColumn">
            <img src={me} className="image" alt="Thomas Dreyer" />
          </div>
        </div>
      </div>
      <div ref={props.workRef} style={{
        paddingTop: 100
      }}>
        <div className="divRow" style={{ marginBottom: 150 }}>
          <MyWork />
        </div>

      </div>
    </div>
  );
}
