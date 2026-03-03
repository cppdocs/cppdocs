---
title: "Attribute specifier sequence(since C23)"
source_path: "c/language/attributes"
category: "c"
---

Introduces implementation-defined attributes for types, objects, expressions, etc.

## Example
```cpp
[[gnu::hot]] [[gnu::const]] [[nodiscard]]
int f(void); // declare f with three attributes
 
[[gnu::const, gnu::hot, nodiscard]]
int f(void); // the same as above, but uses a single attr
             // specifier that contains three attributes
 
int f(void) { return 0; }
 
int main(void)
{
}
```

## See also
- [C++ documentation](/cpp/language/attributes/)
