-- These are example queries for interacting with the postgresql database for this application
-- These will (soon) be abstracted into an API.

-- Add a user
CREATE TABLE user_name (
	id serial PRIMARY KEY UNIQUE,
	tracker TEXT
);

-- Add a tracker. Comment is max value. 1=true/false. 5=out of 5 stars. 10=you get the point.
CREATE TABLE tracker_name (
	date TEXT PRIMARY KEY,
	id INTEGER REFERENCES user_name(id)
)
COMMENT ON TABLE your_table IS '1'; -- <- max value




-- Old user add
CREATE TABLE user_name (
	date TEXT PRIMARY KEY UNIQUE
);

-- Add trackers to a user
INSERT INTO user_name(tracker) VALUES ('example_tracker_1'), ('example_tracker_2');

-- Log to a tracker
INSERT INTO tracker_name()
-- Get tracker meta data (maximum value, see Add a tracker for more details.)
SELECT obj_description('tracker_name'::regclass);


-- Log to tracker(s)
INSERT INTO user_name(date, tracker_1_name)
VALUES ('current-date', TRUE); -- lowercase also OK.

-- Get headers
SELECT * FROM user_name WHERE 1=0