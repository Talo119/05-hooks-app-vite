import { act, renderHook } from '@testing-library/react';
import { useCounter } from '../../src/hooks/useCounter';

describe('Pruebas en el userCounter', () => { 
    test('should de retornar los valores por defecto', () => { 
        
        const { result } = renderHook( () => useCounter() );
        const { counter, decrease, increment, reset } = result.current;

        expect( counter ).toBe(10);
        expect( decrease ).toEqual( expect.any( Function ) );
        expect( increment ).toEqual( expect.any( Function ) );
        expect( reset ).toEqual( expect.any( Function ) );
     })

     test('should be generar el counter con el valor de 100', () => { 
        const { result } = renderHook( () => useCounter(100) );
        expect( result.current.counter ).toBe(100);
      })

      test('should be increment the counter', () => { 
        const { result } = renderHook( () => useCounter(100) );
        const { counter,  increment } = result.current;

        act( () =>{
            increment()
        } )
        
        expect( result.current.counter ).toBe(101)


       })

       test('should be decrease the counter', () => { 
        const { result } = renderHook( () => useCounter(100) );
        const { counter,  decrease } = result.current;

        act( () =>{
            decrease()
        } )
        
        expect( result.current.counter ).toBe(99)


       })

       test('should be reset the counter', () => { 
        const { result } = renderHook( () => useCounter(50) );
        const { counter, increment,  decrease, reset } = result.current;

        act( () =>{
            increment(300)
            decrease(200)
            reset()
        } )
        
        expect( result.current.counter ).toBe(50)


       })


 })