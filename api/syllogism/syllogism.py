# чтобы запустить код – написать в терминале python syllogism.py

def check_p(p):
    s=0
    if p[0]==p[3]: 
        s=1
    if p[1]==p[3]:
        s=2
    if p[0]==p[2]:
        s=3
    if p[1]==p[2]:
        s=4
    return s

def reduce_p(s):
    return [s[0][1],s[0][2],s[1][1],s[1][2]]


def silfun1(h):
    s=h[0][0]
    s=s.join([str(check_p(reduce_p(h))),h[1][0]])
    return s


def silfun(s):
    lst = ['1AAA', '1EAE', '1AII', '1EIO', '1AAI', '1EAO', '2AOO', '2EAE', '2AEE', '2EIO', '2AEO', '2EAO', '3OAO', '3IAI', '3AII', '3EIO', '3AAI', '3EAO', '4AEO', '4IAI', '4AEE', '4EIO', '4AAI', '4EAO']
    s = list(filter(lambda x: x[0:3] == s, lst))
    return s

h=[['A','Socrat', 'Man'],[ 'A','Mortal', 'Socrat']]

def constr(h):
    res=[]
    s=silfun(silfun1(h))
    for sh in s:        
        str_b=[sh[3],h[0][2],h[1][2]]
        res.append(str_b)
    return res

print (constr(h))
