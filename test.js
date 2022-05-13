import { c, log } from "./index.js";

//

log(
	c.Red("red"),

	c.BgYellow(c.Bright("bright yellow")),

	c.Blink(c.Underscore("underscore blink")),
);
