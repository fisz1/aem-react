  import React from 'react';
  import { render } from '@testing-library/react';
  import '@testing-library/jest-dom';
  import nock from 'nock';
  import AisleRocket from './AisleRocket';

  describe('AisleRocket Component', () => {
    let nockInstance;

    beforeEach(() => {
      nockInstance = nock("https://picsum.photos", {
        allowUnmocked: true
      })
        .defaultReplyHeaders({
          'access-control-allow-origin': '*',
          'access-control-allow-credentials': 'true' 
        });
    });

    afterEach(() => {
      nock.cleanAll();
    });

    it("shows loading state on load", () => {
      const { getByText } = render(<AisleRocket />);
      const loadingText = getByText("Loading AisleRocket...");
      expect(loadingText).toBeInTheDocument();
    });

    it("fetches and renders one image", async () => {
      const mockedResponse = [
        {
          id: 1,
          download_url: "https://picsum.photos/id/1/200/300",
          author: "Author Name 1",
        },
      ];

      nockInstance.get("/v2/list")
        .query({ limit: 1 })
        .reply(200, mockedResponse);

      const { findByAltText } = render(<AisleRocket limit={1} />);
      const image = await findByAltText("Author Name 1");

      expect(image).toBeInTheDocument();
      expect(image).toHaveAttribute(
        "src",
        "https://picsum.photos/id/1/200/300"
      );
    });

    it("fetches and renders five images by default", async () => {
      const mockedResponse = [
        {
          id: 1,
          download_url: "https://picsum.photos/id/1/200/300",
          author: "Author Name 1",
        },
        {
          id: 2,
          download_url: "https://picsum.photos/id/2/200/300",
          author: "Author Name 2",
        },
        {
          id: 3,
          download_url: "https://picsum.photos/id/3/200/300",
          author: "Author Name 3",
        },
        {
          id: 4,
          download_url: "https://picsum.photos/id/4/200/300",
          author: "Author Name 4",
        },
        {
          id: 5,
          download_url: "https://picsum.photos/id/5/200/300",
          author: "Author Name 5",
        },
      ];

      nockInstance.get("/v2/list")
        .query({ limit: 5 })
        .reply(200, mockedResponse);

      const { findAllByRole } = render(<AisleRocket />);
      const images = await findAllByRole("img");

      expect(images.length).toBe(5);
    });

    it("handles error state when fetch fails", async () => {
      nockInstance.get("/v2/list")
        .query({ limit: 1 })
        .replyWithError('Error fetching data');

      await render(<AisleRocket limit={1} />);
    });
  });
