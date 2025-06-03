from agents.math_agent import MathAgent
from agents.physics_agent import PhysicsAgent
from agents.other_agent import OtherAgent
from tools.gemini_api import classify_subject

class TutorAgent:
    def __init__(self):
        self.math = MathAgent()
        self.physics = PhysicsAgent()
        self.other = OtherAgent()
    
    def route_query(self,query):
        subject  = classify_subject(query)
        if subject == "MATH":
            return self.math.handle(query)
        elif subject == "PHYSICS":
            return self.physics.handle(query)
        else:
            return self.other.handle(query)