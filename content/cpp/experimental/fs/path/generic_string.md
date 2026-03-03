---
title: "std::experimental::filesystem::path::generic_string,generic_wstring,generic_u8string,..."
source_path: "cpp/experimental/fs/path/generic_string"
category: "experimental"
---

Returns the internal pathname in generic pathname format, converted to specific string type. Conversion, if any, is specified in . The / character is used as the directory separator.

## Declarations
```cpp
template< class CharT, class Traits = std::char_traits<CharT>,
class Alloc = std::allocator<CharT> >
std::basic_string<CharT,Traits,Alloc>
generic_string( const Alloc& a = Alloc() ) const;
```
_(filesystem TS)_

```cpp
std::string generic_string() const;
```

```cpp
std::wstring generic_wstring() const;
```

```cpp
std::string generic_u8string() const;
```

```cpp
std::u16string generic_u16string() const;
```

```cpp
std::u32string generic_u32string() const;
```

## Parameters
- `a`: allocator to construct the string with

## Return value
The internal pathname in generic pathname format, converted to specified string type.

## See also
- [stringwstringu8stringu16stringu32string](/cpp/experimental/fs/path/string/)
