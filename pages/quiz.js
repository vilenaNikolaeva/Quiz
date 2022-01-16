import Quiz from '../components/Quiz';
// import {data} from '../data/data.js';
 const BASE_URL='https://quiz1-d5287-default-rtdb.europe-west1.firebasedatabase.app/questions.json';

export const getStaticProps = async () => {
  const res = await fetch(BASE_URL)
  const data = await res.json();
    return {
      props: {
        questions: data,
      },
    };
  };
  
export default function QuizPage({ questions }){
    return (
        <Quiz questions={questions} />
    )
}