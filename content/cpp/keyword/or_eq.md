---
title: "C++ keyword: or_eq"
source_path: "cpp/keyword/or_eq"
category: "keyword"
---

[alternative operators](/cpp/language/operator_alternative/): as an alternative for |=

## Example
```cpp
#include <bitset>
#include <iostream>
 
using bin = std::bitset<8>;
 
void show(bin z, const char* s, int n)
{
    if (n == 0) std::cout << "┌───────────┬──────────┐\n";
    if (n <= 2) std::cout << "│ " <<s<< " │ " <<z<<" │\n";
    if (n == 2) std::cout << "└───────────┴──────────┘\n";
}
 
int main()
{
    bin x{"01011010"}; show(x, "x        ", 0);
    bin y{"00111100"}; show(y, "y        ", 1);
    x or_eq y;         show(x, "x or_eq y", 2);
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
- [xor](/cpp/keyword/xor/)
- [xor_eq](/cpp/keyword/xor_eq/)
