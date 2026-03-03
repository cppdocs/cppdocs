---
title: "C I/O"
description: "Streams, formatted I/O, byte and wide character operations, file positioning, buffering, and file-management routes in the C library."
source_path: "c/io"
layout: "overview-hub"
overview_page_class: "overview-page-c-io"
---

C I/O is centered around `FILE`, standard streams, formatted input/output, byte and wide character operations, buffering, and file-position state. This page is the curated entry point for choosing the right I/O model before dropping into individual functions.

<div class="overview-note">
This hub stays focused on the C I/O library. It points to canonical `stdio.h` and `wchar.h` routes, and links outward to adjacent C and C++ areas where the problem is no longer primarily about the C stream model itself.
</div>

## Start Here

<div class="section-grid">
  <section class="section-card">
    <h3 class="card-title"><a href="/c/io/FILE/">Streams and file handles</a></h3>
    <p class="card-desc">Start here when you need the core model: what a `FILE` is, how standard streams behave, and how streams are opened, reopened, and closed.</p>
    <p class="card-links"><a href="/c/io/FILE/">FILE</a> · <a href="/c/io/std_streams/">stdin/stdout/stderr</a> · <a href="/c/io/fopen/">fopen</a> · <a href="/c/io/fclose/">fclose</a></p>
  </section>
  <section class="section-card">
    <h3 class="card-title"><a href="/c/io/fprintf/">Formatted I/O</a></h3>
    <p class="card-desc">Use the formatted family when the task is scanning or printing structured text with format strings rather than raw byte transfer.</p>
    <p class="card-links"><a href="/c/io/fprintf/">fprintf</a> · <a href="/c/io/fscanf/">fscanf</a> · <a href="/c/io/vfprintf/">vfprintf</a> · <a href="/c/io/vfscanf/">vfscanf</a></p>
  </section>
  <section class="section-card">
    <h3 class="card-title"><a href="/c/io/fgetc/">Byte vs wide character I/O</a></h3>
    <p class="card-desc">Use these routes when you are reading or writing individual characters or lines, and need to choose between byte-oriented and wide-oriented stream behavior.</p>
    <p class="card-links"><a href="/c/io/fgetc/">fgetc/getc</a> · <a href="/c/io/fgetwc/">fgetwc/getwc</a> · <a href="/c/io/fwide/">fwide</a></p>
  </section>
  <section class="section-card">
    <h3 class="card-title"><a href="/c/io/fseek/">Positioning and buffering</a></h3>
    <p class="card-desc">Start here when the problem is seek/tell state, `fpos_t`, rewinding, flushing, buffering, or stream status flags rather than the data representation itself.</p>
    <p class="card-links"><a href="/c/io/fseek/">fseek</a> · <a href="/c/io/ftell/">ftell</a> · <a href="/c/io/setvbuf/">setvbuf</a> · <a href="/c/io/clearerr/">clearerr</a></p>
  </section>
</div>

## Quick Map

<div class="overview-table">
  <table>
    <thead>
      <tr>
        <th>If you need to...</th>
        <th>Start with</th>
        <th>Why</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Open, reopen, or close a stream</td>
        <td><a href="/c/io/fopen/">fopen</a>, <a href="/c/io/freopen/">freopen</a>, <a href="/c/io/fclose/">fclose</a></td>
        <td>These functions define the lifetime and access mode of the underlying `FILE` stream.</td>
      </tr>
      <tr>
        <td>Read or write formatted text with conversion specifiers</td>
        <td><a href="/c/io/fprintf/">fprintf</a>, <a href="/c/io/fscanf/">fscanf</a>, <a href="/c/io/fwprintf/">fwprintf</a>, <a href="/c/io/fwscanf/">fwscanf</a></td>
        <td>The formatted families sit on top of the stream model and are the right entry point when a format string drives the I/O contract.</td>
      </tr>
      <tr>
        <td>Transfer raw objects or byte blocks</td>
        <td><a href="/c/io/fread/">fread</a>, <a href="/c/io/fwrite/">fwrite</a></td>
        <td>This is the direct route for binary or object-sized transfers where per-character formatting is not wanted.</td>
      </tr>
      <tr>
        <td>Read or write one character or one line at a time</td>
        <td><a href="/c/io/fgetc/">fgetc/getc</a>, <a href="/c/io/fgets/">fgets</a>, <a href="/c/io/fputc/">fputc/putc</a>, <a href="/c/io/fputs/">fputs</a></td>
        <td>The byte-oriented primitives are the simplest stream surface when the job is textual but not format-string driven.</td>
      </tr>
      <tr>
        <td>Use wide-character stream I/O</td>
        <td><a href="/c/io/fgetwc/">fgetwc/getwc</a>, <a href="/c/io/fputwc/">fputwc/putwc</a>, <a href="/c/io/fwide/">fwide</a></td>
        <td>Wide I/O has orientation rules and runtime behavior that differ from byte-oriented stream use.</td>
      </tr>
      <tr>
        <td>Seek, rewind, or store a stream position</td>
        <td><a href="/c/io/fseek/">fseek</a>, <a href="/c/io/ftell/">ftell</a>, <a href="/c/io/fgetpos/">fgetpos</a>, <a href="/c/io/fsetpos/">fsetpos</a>, <a href="/c/io/rewind/">rewind</a></td>
        <td>These functions deal with the file-position indicator and saved positioning state rather than data format.</td>
      </tr>
      <tr>
        <td>Control buffering, flush output, or inspect stream state</td>
        <td><a href="/c/io/setbuf/">setbuf</a>, <a href="/c/io/setvbuf/">setvbuf</a>, <a href="/c/io/fflush/">fflush</a>, <a href="/c/io/feof/">feof</a>, <a href="/c/io/ferror/">ferror</a></td>
        <td>This route covers performance tuning and stream-status diagnostics.</td>
      </tr>
      <tr>
        <td>Create temporary files or manipulate filesystem names through stdio</td>
        <td><a href="/c/io/tmpfile/">tmpfile</a>, <a href="/c/io/tmpnam/">tmpnam</a>, <a href="/c/io/remove/">remove</a>, <a href="/c/io/rename/">rename</a></td>
        <td>These are the C library file-management entry points adjacent to, but not identical with, open/read/write operations.</td>
      </tr>
    </tbody>
  </table>
</div>

## I/O Families

<div class="section-grid">
  <section class="section-card">
    <h3 class="card-title"><a href="/c/io/FILE/">Core stream model</a></h3>
    <p class="card-desc">`FILE`, the predefined standard streams, and the lifecycle functions that attach streams to files or devices.</p>
    <p class="card-links"><a href="/c/io/FILE/">FILE</a> · <a href="/c/io/std_streams/">standard streams</a> · <a href="/c/io/fopen/">fopen</a> · <a href="/c/io/freopen/">freopen</a></p>
  </section>
  <section class="section-card">
    <h3 class="card-title"><a href="/c/io/fprintf/">Formatted text I/O</a></h3>
    <p class="card-desc">The `printf`/`scanf` families for byte and wide streams, including `va_list`-driven variants.</p>
    <p class="card-links"><a href="/c/io/fprintf/">fprintf</a> · <a href="/c/io/fscanf/">fscanf</a> · <a href="/c/io/vfprintf/">vfprintf</a> · <a href="/c/io/vfwprintf/">vfwprintf</a></p>
  </section>
  <section class="section-card">
    <h3 class="card-title"><a href="/c/io/fread/">Block and record transfer</a></h3>
    <p class="card-desc">Direct byte/object movement to and from streams for binary files and serialized data.</p>
    <p class="card-links"><a href="/c/io/fread/">fread</a> · <a href="/c/io/fwrite/">fwrite</a></p>
  </section>
  <section class="section-card">
    <h3 class="card-title"><a href="/c/io/fgetc/">Byte-oriented character I/O</a></h3>
    <p class="card-desc">Single-byte character reads/writes, line-oriented helpers, and pushback for byte streams.</p>
    <p class="card-links"><a href="/c/io/fgetc/">fgetc</a> · <a href="/c/io/fgets/">fgets</a> · <a href="/c/io/fputc/">fputc</a> · <a href="/c/io/ungetc/">ungetc</a></p>
  </section>
  <section class="section-card">
    <h3 class="card-title"><a href="/c/io/fgetwc/">Wide-character I/O</a></h3>
    <p class="card-desc">Wide stream reading/writing together with orientation control and pushback semantics.</p>
    <p class="card-links"><a href="/c/io/fgetwc/">fgetwc</a> · <a href="/c/io/fgetws/">fgetws</a> · <a href="/c/io/fputwc/">fputwc</a> · <a href="/c/io/ungetwc/">ungetwc</a></p>
  </section>
  <section class="section-card">
    <h3 class="card-title"><a href="/c/io/fseek/">Positioning and state</a></h3>
    <p class="card-desc">Position indicators, `fpos_t`, rewinding, status flags, error clearing, and buffering control.</p>
    <p class="card-links"><a href="/c/io/fseek/">fseek</a> · <a href="/c/io/fpos_t/">fpos_t</a> · <a href="/c/io/clearerr/">clearerr</a> · <a href="/c/io/setvbuf/">setvbuf</a></p>
  </section>
</div>

## Stream Model And State

<div class="overview-table">
  <table>
    <thead>
      <tr>
        <th>Concern</th>
        <th>Primary destinations</th>
        <th>Use it for</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Stream identity and predefined handles</td>
        <td><a href="/c/io/FILE/">FILE</a>, <a href="/c/io/std_streams/">stdin/stdout/stderr</a></td>
        <td>Understanding what a stream is and which built-in handles exist before any explicit `fopen` call.</td>
      </tr>
      <tr>
        <td>Position tracking</td>
        <td><a href="/c/io/fseek/">fseek</a>, <a href="/c/io/ftell/">ftell</a>, <a href="/c/io/fgetpos/">fgetpos</a>, <a href="/c/io/fsetpos/">fsetpos</a>, <a href="/c/io/fpos_t/">fpos_t</a></td>
        <td>Moving within a file, saving/restoring location, and dealing with implementation-defined position state.</td>
      </tr>
      <tr>
        <td>Buffering and flushing</td>
        <td><a href="/c/io/setbuf/">setbuf</a>, <a href="/c/io/setvbuf/">setvbuf</a>, <a href="/c/io/fflush/">fflush</a></td>
        <td>Controlling buffering policy and forcing buffered output to be written.</td>
      </tr>
      <tr>
        <td>Error and EOF status</td>
        <td><a href="/c/io/clearerr/">clearerr</a>, <a href="/c/io/feof/">feof</a>, <a href="/c/io/ferror/">ferror</a>, <a href="/c/io/perror/">perror</a></td>
        <td>Inspecting stream state after failed operations and reporting human-readable diagnostics.</td>
      </tr>
      <tr>
        <td>Byte vs wide orientation</td>
        <td><a href="/c/io/fwide/">fwide</a>, <a href="/c/io/fgetc/">byte I/O</a>, <a href="/c/io/fgetwc/">wide I/O</a></td>
        <td>Choosing or querying whether a stream is operating in narrow-byte mode or wide-character mode.</td>
      </tr>
    </tbody>
  </table>
</div>

## Related File Operations

<div class="overview-table">
  <table>
    <thead>
      <tr>
        <th>Task</th>
        <th>Go here</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Create a temporary file safely through the standard I/O library.</td>
        <td><a href="/c/io/tmpfile/">tmpfile</a></td>
      </tr>
      <tr>
        <td>Generate a temporary name only.</td>
        <td><a href="/c/io/tmpnam/">tmpnam</a></td>
      </tr>
      <tr>
        <td>Delete or rename a filesystem entry through the stdio surface.</td>
        <td><a href="/c/io/remove/">remove</a>, <a href="/c/io/rename/">rename</a></td>
      </tr>
      <tr>
        <td>Leave C stdio and navigate the C++ stream model instead.</td>
        <td><a href="/cpp/io/">C++ I/O</a></td>
      </tr>
    </tbody>
  </table>
</div>
