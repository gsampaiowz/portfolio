import Container from "@/components/container";
import ProjectCard from "@/components/projectCard";

export default function Projects() {
    return (
        <Container>
            <div className="flex flex-wrap justify-center gap-8 mt-8">

            <ProjectCard nome="Projeto 1" img="https://picsum.photos/200/300" link="https://github.com/gabrielsampaio" repo="https://github.com/gabrielsampaio" description="Descricão do projeto" techs={[]}/>
            <ProjectCard nome="Projeto 1" img="https://picsum.photos/200/300" link="https://github.com/gabrielsampaio" repo="https://github.com/gabrielsampaio" description="Descricão do projeto" techs={[]}/>
            <ProjectCard nome="Projeto 1" img="https://picsum.photos/200/300" link="https://github.com/gabrielsampaio" repo="https://github.com/gabrielsampaio" description="Descricão do projeto" techs={[]}/>
            <ProjectCard nome="Projeto 1" img="https://picsum.photos/200/300" link="https://github.com/gabrielsampaio" repo="https://github.com/gabrielsampaio" description="Descricão do projeto" techs={[]}/>
            </div>
        </Container>
    );
}