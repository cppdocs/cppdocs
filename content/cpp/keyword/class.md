---
title: "C++ keyword: class"
source_path: "cpp/keyword/class"
category: "keyword"
---

[declaration of a class](/cpp/language/class/)

## Example
```cpp
class Foo; // forward declaration of a class
 
class Bar  // definition of a class
{
public:
    Bar(int i) : m_i(i) {}
private:
    int m_i;
};
 
template<class T> // template argument
void qux()
{
    T t;
}
 
enum class Pub // scoped enum, since C++11
{
    b, d, p, q
};
 
int main()
{
    Bar Bar(1); // variable Bar hides type Bar
    Bar Bar2(2); // compiler error
    class Bar Bar3(3); // elaborated type
}
```

## See also
- [struct](/cpp/keyword/struct/)
- [union](/cpp/keyword/union/)
- [final](/cpp/identifier_with_special_meaning/final/)
- [enum](/cpp/keyword/enum/)
- [typename](/cpp/keywords/typename/)
- [template](/cpp/keyword/template/)
- [concept](/cpp/keyword/concept/)
- [requires](/cpp/keyword/requires/)
