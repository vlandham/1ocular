/*
 * This module exports all the action types and action creators
 * that the app uses. Actions are used to communicate intentions
 * to change the state of the application and are commonly triggered
 * by user interaction.
 */

/*
 * action types
 */
export const ADD_TEXT = 'ADD_TEXT';
export const REMOVE_TEXT = 'REMOVE_TEXT';

/*
 * action creators
 */
export function addText(textId, text) {
  return { type: ADD_TEXT, textId, text };
}

export function removeText(textId) {
  return { type: REMOVE_TEXT, textId };
}
