import'./heading.css'


function Heading(props) {
  return (
    <>
    <div class="section-title ">
    <h2><strong>{props.children}</strong></h2>
    </div>
    </>
  );
}

export default Heading;