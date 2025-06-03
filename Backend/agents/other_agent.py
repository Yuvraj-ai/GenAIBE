from tools.gemini_api import ask_gemini

class OtherAgent:
    def handle(self,query):
        return ask_gemini(query)
