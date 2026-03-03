---
title: "std::mem_fun_ref_t, std::mem_fun1_ref_t, std::const_mem_fun_ref_t, std::const_mem_fun1_ref_t"
source_path: "cpp/utility/functional/mem_fun_ref_t"
header: "<functional>"
category: "utility"
---

Wrapper around a member function pointer. The class instance whose member function to call is passed as a reference to the operator().

## Declarations
```cpp
template< class S, class T >
class mem_fun_ref_t : public unary_function<T,S> {
public:
explicit mem_fun_ref_t(S (T::*p)());
S operator()(T& p) const;
};
```
_(deprecated in C++11) (removed in C++17)_

```cpp
template< class S, class T >
class const_mem_fun_ref_t : public unary_function<T,S> {
public:
explicit const_mem_fun_ref_t(S (T::*p)() const);
S operator()(const T& p) const;
};
```
_(deprecated in C++11) (removed in C++17)_

```cpp
template< class S, class T, class A >
class mem_fun1_ref_t : public binary_function<T,A,S> {
public:
explicit mem_fun1_ref_t(S (T::*p)(A));
S operator()(T& p, A x) const;
};
```
_(deprecated in C++11) (removed in C++17)_

```cpp
template< class S, class T, class A >
class const_mem_fun1_ref_t : public binary_function<T,A,S> {
public:
explicit const_mem_fun1_ref_t(S (T::*p)(A) const);
S operator()(const T& p, A x) const;
};
```
_(deprecated in C++11) (removed in C++17)_

## See also
- [mem_fun_ref](/cpp/utility/functional/mem_fun_ref/)
- [mem_fun_tmem_fun1_tconst_mem_fun_tconst_mem_fun1_t](/cpp/utility/functional/mem_fun_t/)
