import { render, screen } from '@testing-library/react'
import { MultipleCustomHooks } from '../../src/03-examples'

describe
('Pruebas en <MultipleCustomHooks/>', () => { 
    test('debe de mostrar el componente por defecto', () => { 
        render( <MultipleCustomHooks /> );
        screen.debug();
     })
 })