---
title: "C++ keyword: and"
source_path: "cpp/keyword/and"
category: "keyword"
---

[alternative operators](/cpp/language/operator_alternative/): as an alternative for &&

## Example
```cpp
int main()
{
    static_assert((false and false) == false);
    static_assert((false and true)  == false);
    static_assert((true  and false) == false);
    static_assert((true  and true)  == true);
}
```

## See also
- [and_eq](/cpp/keyword/and_eq/)
- [bitand](/cpp/keyword/bitand/)
- [bitor](/cpp/keyword/bitor/)
- [not](/cpp/keyword/not/)
- [not_eq](/cpp/keyword/not_eq/)
- [or](/cpp/keyword/or/)
- [or_eq](/cpp/keyword/or_eq/)
- [xor](/cpp/keyword/xor/)
- [xor_eq](/cpp/keyword/xor_eq/)
