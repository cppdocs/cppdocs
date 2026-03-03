---
title: "std::basic_syncbuf<CharT,Traits,Allocator>::basic_syncbuf"
source_path: "cpp/io/basic_syncbuf/basic_syncbuf"
category: "io"
since: "C++20"
---

1) Default constructor: creates an instance of std::basic_syncbuf with emit-on-sync policy set to false, wrapped streambuffer set to nullptr, and using default-constructed Allocator as the allocator for temporary storage.

## Declarations
```cpp
basic_syncbuf()
: basic_syncbuf( nullptr )
```

```cpp
explicit basic_syncbuf( streambuf_type* obuf )
: basic_syncbuf( obuf, Allocator() ) {}
```

```cpp
basic_syncbuf( streambuf_type* obuf, const Allocator& a );
```

```cpp
basic_syncbuf( basic_syncbuf&& rhs );
```

## Parameters
- `obuf`: pointer to the std::basic_streambuf to wrap
- `a`: the allocator to use for temporary storage
- `rhs`: another std::basic_syncbuf to move from

## Notes
Typically called by the appropriate constructors of std::basic_osyncstream.

## Example
This section is incompleteReason: no example

## See also
- [sync](/cpp/io/basic_streambuf/pubsync/)
- [emit](/cpp/io/basic_syncbuf/emit/)
