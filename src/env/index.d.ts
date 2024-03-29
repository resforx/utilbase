/**
 *
 * |------------------------------|
 * |       Made by resforx        |
 * |------------------------------|
 *
 * Copyright 2024 Kithub, Inc.
 *
 * Permission is hereby granted, free of charge,
 * to any person obtaining a copy of this software and
 * associated documentation files (the “Software”),
 * to deal in the Software without restriction,
 * including without limitation the rights to
 * use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to
 * whom the Software is furnished to do so,
 * subject to the following conditions:
 *
 * The above copyright notice and this permission notice
 * shall be included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
 * IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
 * DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
 * TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 *
 */

/// <reference types="immer" />
export {};

/**
 * type StateSetter is to set State with this setter
 */
type StateSetter<T> = T | ((prevState: T) => T);

/**
 * interface State is the initial form value of return values from utilizeState
 * @alias getState this function gets current state
 * @alias setState this function sets current state to new state
 */
interface State<T> {
    getState: () => T;
    setState: (updater: StateSetter<T>) => void;
}

/**
 * the function utilizeState is to get state or set states, it gets more easier to get, set states or values
 * @param initialState this parameter is to be used initially
 * @returns getState, get the current states, setState, set the states to new states
 *
 * @example (2 ways)
 *
 * first ways
 * ```typescript
 * const { getState, setState } = utilizeState(initialState);
 * ...
 * ```
 *
 * second ways
 * ```typescript
 * const useStore = utilizeState(initialStore);
 * ...
 * ```
 */
export default function utilizeState<T>(initialState: T): State<T>;

/**
 * this function is to manage immer states using immer's produce function
 * @param updater you want to update its value
 * @returns functions to help use produce
 */
export declare function utilizeImmer<T>(updater: (draft: T) => T): (state: T) => T;

/**
 * this function is to reduce deep, nested, complicated states and manage easier using immer's produce function
 * @param updater you want to update its value
 * @returns functions to help use produce
 */
export declare function utilizeReduce<T>(updater: (draft: T) => void): (state: T) => T;

/**
 * this function is to manage several utilizeStates easier
 * @param stores
 * @returns getState, get states from the index of utilizeStates you write, setState too
 *
 * @example
 * (2 ways)
 *
 * first way
 *
 * ```typescript
 * const { getState, setState } = utilizeStateAll(args1, args2, ...);
 * ...
 * ```
 *
 * second way
 *
 * ```typescript
 * const useStore = utilizeStateAll(args1, args2, ...);
 * ...
 * ```
 */
export declare function utilizeStateAll<T extends State<any>[]>(...stores: T): {
    getState: {
        [K in keyof T]: T[K]['getState'];
    };
    setState: {
        [K in keyof T]: T[K]['setState'];
    };
};
