---
title: "std::valarray<T>::valarray"
source_path: "cpp/numeric/valarray/valarray"
category: "numeric"
since: "C++11"
---

Constructs new numeric array from various sources.

## Declarations
```cpp
valarray();
```

```cpp
explicit valarray( std::size_t count );
```

```cpp
valarray( const T& val, std::size_t count );
```

```cpp
valarray( const T* vals, std::size_t count );
```

```cpp
valarray( const valarray& other );
```

```cpp
valarray( valarray&& other ) noexcept;
```
_(since C++11)_

```cpp
valarray( const std::slice_array<T>& sa );
```

```cpp
valarray( const std::gslice_array<T>& gsa );
```

```cpp
valarray( const std::mask_array<T>& ma );
```

```cpp
valarray( const std::indirect_array<T>& ia );
```

```cpp
valarray( std::initializer_list<T> il );
```
_(since C++11)_

## Parameters
- `count`: the number of elements to construct
- `val`: the value to initialize the elements with
- `vals`: pointer to a C array to use as source to initialize the contents
- `other`: another numeric array to use as source to initialize the contents
- `sa`: slice array to initialize the elements with
- `gsa`: generic slice array to initialize the elements with
- `ma`: mask array to initialize the elements with
- `ia`: indirect array to initialize the elements with
- `il`: initializer list to initialize the elements with

## Example
This section is incompleteReason: no example
