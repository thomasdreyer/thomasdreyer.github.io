
import MyStory from './MyStory';
import MyWork from './MyWork';

export default function Content(props: any) {
  return (
    <div className="content" ref={props.storyRef}>
      <div style={{ marginTop: 100 }}>
        <div className="divRow">
          <MyStory />

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
