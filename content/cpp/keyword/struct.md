---
title: "C++ keyword: struct"
source_path: "cpp/keyword/struct"
category: "keyword"
---

[declaration of a compound type](/cpp/language/class/)

## Example
```cpp
struct Foo; // forward declaration of a struct
 
struct Bar  // definition of a struct
{
    Bar(int i) : i(i + i) {}
 
    int i;
};
 
enum struct Pub // scoped enum, since C++11
{
    b, d, p, q,
};
 
int main()
{
    Bar Bar(1);
    struct Bar Bar2(2); // elaborated type
}
```

## See also
- [class](/cpp/keyword/class/)
- [union](/cpp/keyword/union/)
- [final](/cpp/identifier_with_special_meaning/final/)
- [enum](/cpp/keyword/enum/)
