
This repository demos how to stream user interactions with a p5js sketch (via mouse, keyboard, and/or usb controller) to a python-based websockets server.

Requirements: [uv](https://docs.astral.sh/uv/#installation).

To start the server, run the following in a terminal:
`uv run python server.py --save_name session_id`

Then go to the url listed in a browser and click around.
Your mouse clicks and key presses will be saved locally to the file `logs/session_id.jsonl`.

In this demo, mouse clicks will trigger a photodiode and audio clip, which can be used to timestamp precise events.
