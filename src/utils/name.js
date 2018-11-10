//USES THE CHANCE LIBRARY TO GENERATE A RANDON USERNAME

import Chance from "chance";

const chance = new Chance();

export default chance.first();