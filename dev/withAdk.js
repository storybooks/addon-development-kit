import React from 'react';
import { createDecorator, setParameters } from '../src/decorator';
import './config'

const DecoratorUI = ({ context, getStory, data, parameters }) => (
  <div>
    ADK: <br />
    Data: <br />
    <p>{JSON.stringify(data, null, 2)}</p>
    context: <br />
    <p>
      <small>{JSON.stringify(context, null, 2)}</small>
    </p>
    Params: <br />
    <p>{JSON.stringify(parameters, null, 2)}</p>
    {getStory(context)}
  </div>
);

export const withAdk = createDecorator(DecoratorUI, {isGlobal: true});
export const adkParams = setParameters()