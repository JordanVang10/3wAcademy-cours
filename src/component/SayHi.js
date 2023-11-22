export default function SayHi(props) {
    console.log(props);
    return <h1>Welcome {props.name}, your job is {props.job}. You're {props.statut}. </h1>;
  }
