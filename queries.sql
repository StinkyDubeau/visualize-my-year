-- These are example queries for interacting with the postgresql database for this application
-- These will (soon) be abstracted into an API.

-- Add a user
CREATE TABLE user_name (
	date TEXT PRIMARY KEY UNIQUE
);

-- Add a tracker to a user
ALTER TABLE user_name
ADD COLUMN tracker_1_name BOOL;

-- Log to tracker(s)
INSERT INTO user_name(date, tracker_1_name)
VALUES ('current-date', TRUE); -- lowercase also OK.