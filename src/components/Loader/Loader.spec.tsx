import renderer, {ReactTestRenderer} from 'react-test-renderer';
import Loader from "./Loader.tsx";
import {configureStore, EnhancedStore} from "@reduxjs/toolkit";
import {loadingSlice} from "../../store/loadingSlice.ts";
import {Provider} from "react-redux";

describe('Loader', () => {

    let component: ReactTestRenderer;

    let mockStore: EnhancedStore;

    beforeEach(() => {
        mockStore = configureStore({
            reducer: {
                loading: loadingSlice.reducer
            }
        })

        component = renderer.create(
            <Provider store={mockStore}>
                <Loader/>
            </Provider>
        );
    })

    it('should match snapshot', () => {
        expect(component.toJSON()).toMatchSnapshot();
    });

    it('should render', () => {
        expect(component.root.findByType(Loader)).toBeTruthy();
    });


})
