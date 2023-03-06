import { getByAltText, render } from "@testing-library/react"
import { FirstApp } from "../src/FirstApp"


describe('pruebas en FirstApp', () => {

    // test('debe de hacer match con el snapshot', () => {
    //     const title = 'Hola, soy Sergio';
    //     const {container} =render(<FirstApp title={title} />);

    //      expect(container).toMatchSnapshot();


    // });

    test('debe de mostrar el titulo en h1', () => {
        const title = 'Hola, soy Sergio';
        const { container, getByText, getByTestId } = render(<FirstApp title={title} />);
//        expect(getByText(title)).toBeTruthy();
        expect(getByTestId('test-title').innerHTML).toContain(title);
        // const h1 = container.querySelector('h1');
        // expect(h1.innerHTML).toContain(title);
        // expect(h1.innerHTML).toBe(title);

    })

    test('should debe mostrar le subtitulo enbaido por porps', () => {
        const title = 'Hola, soy Sergio';
        const subTitle = 'Soy un subtitulo';
        const { getAllByText } = render(
            <FirstApp
                title={title}
                subTitle={subTitle}
            />);

        expect(getAllByText(subTitle).length).toBe(2);

       // expect(getByTestId('test-title').innerHTML).toContain(title);
    });


   
})