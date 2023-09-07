import { Button, Paper} from "@mui/material";
import MyCard from "./InfoCard";
import PerfilCard from "./PerfilCard";


export default function App() {
  return (
    <>
    <Paper elevation={3}>
    <center><h1>WHAT IS IA AND HOW TO WORK WITH THAT</h1></center>
    </Paper>
    <MyCard
    key={1}
    title = "Alan Turing"
    text="Alan Mathison Turing OBE FRS ( 23 June 1912 – 7 June 1954) was an English mathematician, computer scientist, logician, cryptanalyst, philosopher and theoretical biologist. Turing was highly influential in the development of theoretical computer science, providing a formalisation of the concepts of algorithm and computation with the Turing machine."
    link="https://www.britannica.com/technology/artificial-intelligence/Alan-Turing-and-the-beginning-of-AI"
    image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfCKVJln-Xd5WK3RTuz3g8ZFdZI5ET99yxog&usqp=CAU"}
     />
     <br/>
     <br/>
     <MyCard
    key={2}
    title = "What is AI?"
    text="Artificial intelligence is the simulation of human intelligence processes by machines, especially computer systems. Specific applications of AI include expert systems, natural language processing, speech recognition and machine vision."
    link="https://www.techtarget.com/searchenterpriseai/definition/AI-Artificial-Intelligence"
    image={"https://d2jx2rerrg6sh3.cloudfront.net/images/news/ImageForNews_750593_16863120449591105.jpg"}
     />
     <br/>
     <br/>
     <MyCard
    key={3}
    title = "How to use AI?"
    text="Prompt engineering is a technique used in artificial intelligence (AI) to optimize and fine-tune language models for particular tasks and desired outputs. Also known as prompt design, it refers to the process of carefully constructing prompts or inputs for AI models to enhance their performance on specific tasks."
    link="https://www.techopedia.com/definition/prompt-engineering"
    image={"https://brita.mx/wp-content/uploads/2023/05/prompt-engineering-Mexico.png"}
     />
     <br/><br/>
     <MyCard
    key={3}
    title = "How to use AI?"
    text="Artificial Intelligence is defined as the ability of a digital computer or computer-controlled robot to perform tasks commonly associated with intelligent beings."
    link="https://www.mygreatlearning.com/blog/what-is-artificial-intelligence/"
    image={"https://www.analyticssteps.com/backend/media/thumbnail/2957667/59319_1624956419_Types%20of%20AI%20(1)Artboard%201.jpg"}
     />
    <hr/><br/>
    <PerfilCard/>
    </>
  )
}
