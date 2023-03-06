import { fireEvent, render, screen } from "@testing-library/react"
import { CounterApp } from "../src/CounterApp"


describe('test <CounterApp>/</CounterApp>', () => {

    const inicitalValue = 10;

    test('debe hacer match con snapshot', () => {
        const { container } = render(<CounterApp value={inicitalValue} />);
        expect(container).toMatchSnapshot();
    })

    test('debe mostrar el valor inical de 100', () => {
        render(<CounterApp value={100} />);

        expect(screen.getByText(100)).toBeTruthy();

    })

    test('debe aumentar con el boton +1 al hacer clik', () => {
        render(<CounterApp value={inicitalValue} />);
        fireEvent.click(screen.getByText('+1'));
        expect(screen.getByText('11')).toBeTruthy();
    })

    test('debe restar con el boton -1 al hacer clik', () => {
        render(<CounterApp value={inicitalValue} />);
        fireEvent.click(screen.getByText('-1'));
        expect(screen.getByText('9')).toBeTruthy();
    })

    test('debe restaurar el valor original', () => {
        render(<CounterApp value={inicitalValue} />);
        fireEvent.click(screen.getByText('-1'));
        fireEvent.click(screen.getByText('-1'));
        fireEvent.click(screen.getByText('-1'));
        // fireEvent.click(screen.getByText('resest'));
        // fireEvent.click(screen.getByText('resest'));
        screen.getByRole('button', {name : 'hola mundo'})
       // expect(screen.getByText(inicitalValue)).toBeTruthy();
    })

})