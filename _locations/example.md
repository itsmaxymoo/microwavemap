---
# This is an example file defining a microwave location.

# (REQUIRED) The name of the building that contains the microwave
building: Willard Building

# The exact room containing the microwave. Optional
room_exact: "360"

# (REQUIRED) How to access the microwave. Required if room_exact is blank.
notes: Common lounge area, all floors above ground.

# Coordinates to the building. Not required; will be inserted by Max if left blank.
coords: 40.800435, -77.862579

# (REQUIRED) Who can access this microwave.
# public - anyone during normal building hours
# monetary - it may cost money to access this microwave (ex: inside dining hall)
# building - special access is required to enter the building.
access: public

# To prevent this example file from being rendered.
skip: true
---