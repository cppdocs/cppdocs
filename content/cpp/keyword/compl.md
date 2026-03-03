---
title: "C++ keyword: compl"
source_path: "cpp/keyword/compl"
category: "keyword"
---

[alternative operators](/cpp/language/operator_alternative/): as an alternative for ~

## Example
```cpp
#include <bitset>
#include <iostream>
 
using bin = std::bitset<8>;
 
void show(bin z, const char* s, int n)
{
    if (n == 0) std::cout << "┌─────────┬──────────┐\n";
    if (n <= 2) std::cout << "│ "<<s<<" │ " <<z<<" │\n";
    if (n == 2) std::cout << "└─────────┴──────────┘\n";
}
 
struct A
{
    compl A() { std::cout << "A dtor\n"; }
};
 
int main()
{
    bin x{"01011010"}; show(x, "x      ", 0);
    bin z = compl x;   show(z, "compl x", 2);
    A a;
}
```

## See also
- [and](/cpp/keyword/and/)
- [and_eq](/cpp/keyword/and_eq/)
- [bitand](/cpp/keyword/bitand/)
- [bitor](/cpp/keyword/bitor/)
- [not](/cpp/keyword/not/)
- [not_eq](/cpp/keyword/not_eq/)
- [or](/cpp/keyword/or/)
- [or_eq](/cpp/keyword/or_eq/)
- [xor](/cpp/keyword/xor/)
- [xor_eq](/cpp/keyword/xor_eq/)
