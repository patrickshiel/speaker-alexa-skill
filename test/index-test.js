import test from 'ava';
import { handler as Skill } from '..';
import Request from 'alexa-request';

test('LaunchRequest', t => {
  const event = Request.launchRequest().build();

  return Skill(event).then(response => {
    t.deepEqual(response, {
      version: '1.0',
      response: {
        shouldEndSession: true,
        outputSpeech: { type: 'PlainText', text: 'Paly launched!' }
      }
    });
  });
});

test('Paly.HelloIntent intent', t => {
  const event = Request.intent('Paly.HelloIntent', { name: 'world' }).build();

  return Skill(event).then(response => {
    t.deepEqual(response, {
      version: '1.0',
      response: {
        shouldEndSession: true,
        outputSpeech: { type: 'PlainText', text: 'Hello world' },
        card: { type: 'Simple', title: 'Paly', content: 'Hello world' }
      }
    });
  });
});
