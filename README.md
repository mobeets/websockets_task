
This repository demos how to stream user interactions with a p5js sketch (via mouse, keyboard, and/or usb controller) to a python-based websockets server.

You should first install [uv](https://docs.astral.sh/uv/#installation).

To start the server, run the following in a terminal:
`uv run python server.py --logdir logs`

Then go to the url listed in a browser and click around.

- Your mouse clicks and key presses will be saved locally to a `.jsonl` file in `logs/`.
- Appending `?subject_id=TEST` to the url will prepend `TEST` to the filename.
- In this demo, mouse clicks will trigger a photodiode and audio clip, which can be used to timestamp precise events.
