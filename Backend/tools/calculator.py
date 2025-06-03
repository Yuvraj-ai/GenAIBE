import sympy as sp

def solve_math(expr):
    try:
        result = sp.sympify(expr)
        return str(result)
    except Exception as e:
        return f"Error :{str(e)}"