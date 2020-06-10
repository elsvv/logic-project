from functools import reduce
import pandas as pd
from itertools import product


def K(p, q):
    '''Conjunction'''
    if p == 'T' and q == 'T':
        return 'T'
    if p == 'T' and q == 'F':
        return 'F'
    if p == 'F' and q == 'T':
        return 'F'
    if p == 'F' and q == 'F':
        return 'F'


def A(p, q):
    '''Disjunction'''
    if p == 'T' and q == 'T':
        return 'T'
    if p == 'T' and q == 'F':
        return 'T'
    if p == 'F' and q == 'T':
        return 'T'
    if p == 'F' and q == 'F':
        return 'F'


def C(p, q):
    '''Conditional'''
    if p == 'T' and q == 'T':
        return 'T'
    if p == 'T' and q == 'F':
        return 'F'
    if p == 'F' and q == 'T':
        return 'T'
    if p == 'F' and q == 'F':
        return 'T'


def E(p, q):
    '''Equivalence'''
    if p == 'T' and q == 'T':
        return 'T'
    if p == 'T' and q == 'F':
        return 'F'
    if p == 'F' and q == 'T':
        return 'F'
    if p == 'F' and q == 'F':
        return 'T'


def D(p, q):
    '''Sheffer's srroke'''
    if p == 'T' and q == 'T':
        return 'F'
    if p == 'T' and q == 'F':
        return 'T'
    if p == 'F' and q == 'T':
        return 'T'
    if p == 'F' and q == 'F':
        return 'T'


def P(p, q):
    '''Peirce's arrow'''
    if p == 'T' and q == 'T':
        return 'F'
    if p == 'T' and q == 'F':
        return 'F'
    if p == 'F' and q == 'T':
        return 'F'
    if p == 'F' and q == 'F':
        return 'T'


def S(p, q):
    '''Strong Disjunction '''
    if p == 'T' and q == 'T':
        return 'F'
    if p == 'T' and q == 'F':
        return 'T'
    if p == 'F' and q == 'T':
        return 'T'
    if p == 'F' and q == 'F':
        return 'F'


def N(p):
    '''Negation'''
    if p == 'T':
        return 'F'
    if p == 'F':
        return 'T'


rank = {'~': 3,
        '&': 2,
        'v': 2,
        '>': 2,
        '|': 2,
        '!': 2,
        '=': 2,
        '+': 2,
        '(': 1}

connectives = ['K', 'A', 'C', 'E', 'D', 'P', 'S']
connectives_N = connectives + ['N']


def evaluate(expression):
    ''' TFFCAN > F'''
    expression = ' '.join(expression)
    tokens = expression.split(' ')
    stack = []
    for token in tokens:
        if token in connectives:
            arg2 = stack.pop()
            arg1 = stack.pop()
            if token == 'K':
                result = K(arg1, arg2)
            if token == 'A':
                result = A(arg1, arg2)
            if token == 'C':
                result = C(arg1, arg2)
            if token == 'D':
                result = D(arg1, arg2)
            if token == 'E':
                result = E(arg1, arg2)
            if token == 'P':
                result = P(arg1, arg2)
            if token == 'S':
                result = S(arg1, arg2)
            stack.append(result)
        elif token == 'N':
            arg = stack.pop()
            result = N(arg)
            stack.append(result)
        else:
            stack.append(token)
    return(stack)


def set_var(form):
    var = list(set(filter(lambda x: x not in connectives_N, form)))
    out = sorted(var)
    return var


def gen_strings(var):
    n = len(var)
    out = list(product('FT', repeat=n))
    return out


def eval_form_on_val(valuation, formula):
    var = set_var(formula)
    val = valuation
    new = formula
    for i in range(len(var)):
        new = [x.replace(var[i], val[i]) for x in new]
    new = ''.join(new)
    out = evaluate(new)
    return out


def truth_table(input_formula):
    '''Truth Table for Formula '''
    formula = revpolish(input_formula)
    var = set_var(formula)
    strings = gen_strings(var)
    out = []
    out = out + [var + [input_formula]]
    for string in strings:
        out = out + [list(string) + eval_form_on_val(string, formula)]
    return out


strletters = 'QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcbnm'
letters = ' '.join(strletters).split()


def revpolish(formula):
    tokens = ' '.join(formula).split()
    stack = []
    out = []
    for token in tokens:
        if token in letters:
            out.append(token)
        if token == '(':
            stack.append(token)
        if token in ['>', '&', 'v', '|', '=', '~', '!', '+']:
            if stack == [] or rank[token] > rank[stack[-1]]:  # > или >= ???
                stack.append(token)
            else:
                count = 0
                for i in range(len(stack)):
                    if rank[stack[-i-1]] > rank[token]:
                        out.append(stack[-i-1])
                        count = count+1
                    else:
                        break
                x = 0
                while x < count and x != []:
                    stack.pop()
                    x = x+1
                stack.append(token)
        if token == ')':
            x = stack.pop()
            while x != '(':
                out.append(x)
                x = stack.pop()
    while stack != []:
        out.append(stack.pop())

    def replace(lst):
        new = [x.replace('&', 'K') for x in lst]
        new = [x.replace('v', 'A') for x in new]
        new = [x.replace('~', 'N') for x in new]
        new = [x.replace('>', 'C') for x in new]
        new = [x.replace('=', 'E') for x in new]
        new = [x.replace('|', 'D') for x in new]
        new = [x.replace('!', 'P') for x in new]
        new = [x.replace('+', 'S') for x in new]
        return new

    out = replace(out)
    out = ''.join(out)
    return(out)


def replace_TF(var1, var2, string):
    new_string = [x.replace('T', var1) for x in string]
    new_string = [x.replace('F', var2) for x in new_string]
    return new_string


def replace_TF_table(x, y, tab):
    table_h = tab[0]
    table_t = tab[1:]
    table_t = list(map(lambda z: replace_TF(x, y, z), table_t))
    new_table = [table_h] + table_t
    return new_table


def replace_sym(f):
    new_str = [x.replace('~', '¬') for x in f]
    new_str = [x.replace('&', '∧') for x in new_str]
    new_str = [x.replace('v', '∨') for x in new_str]
    new_str = [x.replace('>', '→') for x in new_str]
    new_str = [x.replace('=', '≡') for x in new_str]
    new_str = [x.replace('|', '|') for x in new_str]
    new_str = [x.replace('!', '↓') for x in new_str]
    new_str = [x.replace('+', '⊻') for x in new_str]
    new_str = ''.join(new_str)
    return new_str


def print_truth_table(formula, x='T', y='F'):
    table = truth_table(formula)
    table = replace_TF_table(x, y, table)
    form_tr = replace_sym(formula)
    table[0][-1] = form_tr
    df = pd.DataFrame(table[1:], columns=table[0])
    df = df.style.set_properties(**{'text-align': 'center'})
    return df


def truth_table_for_list(list_of_formulas):

    def variables_in_list_of_formulas(list_of_formulas):
        list_of_formulas = list(map(revpolish, list_of_formulas))
        out = sorted(
            list(set(reduce(lambda x, y: x+y, list(map(set_var, list_of_formulas))))))
        return out

    def eval_form_on_val_d(d_valuation, formula):
        var = set_var(formula)
        new = formula
        for v in var:
            new = [x.replace(v, d_valuation[v]) for x in new]
        new = ''.join(new)
        out = evaluate(new)
        return out

    formulas = list(map(revpolish, list_of_formulas))
    var = variables_in_list_of_formulas(formulas)
    strings = gen_strings(var)

    def string_var_to_dstring(somevar, somestring):
        return dict(zip(somevar, somestring))

    strings_d = list(map(lambda x: string_var_to_dstring(var, x), strings))

    def eval_list_of_formulas_on_string_d(dstring, lformulas):
        out = list(map(lambda x: eval_form_on_val_d(dstring, x), lformulas))
        out = list(map(lambda x: x[0], out))
        return out

    out = [var+list_of_formulas]
    for string in strings:
        res = eval_list_of_formulas_on_string_d(
            string_var_to_dstring(var, string), formulas)
        out = out + [list(string) + res]

    return out


def print_truth_table_for_list(lst, x='T', y='F'):
    table = truth_table_for_list(lst)
    table = replace_TF_table(x, y, table)
    table[0] = list(map(replace_sym, table[0]))

    return table

#     df = pd.DataFrame(table[1:], columns=table[0])  # вы
#     df = df.style.set_properties(**{'text-align': 'center'})
#     return df


def print_truth_table_(formula, x='T', y='F'):
    return print_truth_table_for_list([formula], x, y)


def print_truth_table_html(formula, x='T', y='F'):
    table = truth_table_for_list([formula])
    table = replace_TF_table(x, y, table)
    table[0] = list(map(replace_sym, table[0]))
    df = pd.DataFrame(table[1:], columns=table[0])  # вы
    df = df.to_html()
    return df
