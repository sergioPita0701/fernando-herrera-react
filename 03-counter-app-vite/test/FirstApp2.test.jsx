import { render, screen } from "@testing-library/react"
import { FirstApp } from "../src/FirstApp"


describe('pruebas en FirstApp', () => {

    const title = 'Hola, soy Sergio';
    const subTitle = 'Soy un subtitulo';


    test('debe de hacer match con el snapshot', () => {

        const { container } = render(<FirstApp title={title} />);
        expect(container).toMatchSnapshot();

    });

    test('debe de mostrar el hol soy gouk', () => {
        render(<FirstApp title={title} />);
        expect(screen.getByText(title)).toBeTruthy();
    })

    test('debe de mostrar el titulo en h1', () => {

        render(<FirstApp title={title} />);
        expect(screen.getByRole('heading', { level: 1 }).innerHTML).toContain(title);

    })

    test('debe mostrar que el subtitulo enviado por porps', () => {

        render(
            <FirstApp
                title={title}
                subTitle={subTitle}
            />
        );
        expect(screen.getAllByText(subTitle).length).toBe(2)

    });



})