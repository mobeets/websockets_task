
This repository demos how to stream user interactions with a p5js sketch (via mouse, keyboard, and/or usb controller) to a python-based websockets server.

To start the server, run the following in a terminal:
`uv run python server.py --save_name test`

Then go to the url listed in a browser and click around.
Your mouse clicks and key presses will be saved locally to the `logs/test.jsonl`.
