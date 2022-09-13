
import { todoReducer } from '../../src/08-useReducer/todoReducer';

describe('Pruebas en todoReducer', () => { 

    const initialState = [{
        id:1,
        description: 'Demo Todo',
        done: false,
    }]

    test('debe regresar el estado inicial', () => { 
        const newState = todoReducer( initialState, {} );
        expect( newState ).toBe( initialState );
     })

     test('debe de agregar un todo', () => { 
        
        const action = {
            type: '[TODO] AddTodo',
            payload: {
                id: 2,
                description: 'Todo 2',
                done: false,
            }
        };

        const newState = todoReducer( initialState, action );
        expect( newState.length ).toBe(2);
        expect( newState ).toContain( action.payload );

      })


      test('debe de eliminar un todo', () => { 
        const action = {
            type: '[TODO] RemoveTodo',
            payload: 1
        };

        const newState = todoReducer( initialState, action );
        expect( newState.length ).toBe(0);
        //expect( newState ).toContain( action.payload );

       })

       test('debe realizar el Toggle del todo', () => { 
            const action = {
                type: '[TODO] ToggleTodo',
                payload: 1
            };

            const newState = todoReducer( initialState, action );
            expect( newState[0].done ).toBe(true);

            const newState2 = todoReducer( newState, action );
            expect( newState2[0].done ).toBe(false);
            
        })
 })