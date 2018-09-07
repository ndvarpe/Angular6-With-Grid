import { TestBed, getTestBed } from "@angular/core/testing";
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { IFunnel } from "../../models/funnel";
import { } from 'jasmine';
import { FunnelService } from "./funnel.service";
import { Observable } from "rxjs";

describe('FunnelService', () => {
  let injector: TestBed;
  let service: FunnelService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [FunnelService]
    });
    injector = getTestBed();
    service = injector.get(FunnelService);
    httpMock = injector.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  describe('#getFunnels', () => {
    it('should return an Observable<IFunnel[]>', () => {
      const dummyFunnels = [
        {
          funnelId: 1,
          clientName: "Boothe, Marie",
          taxYear: 2017,
          funnelStatus: 4,
          funnelOpened: "26/08/2018",
          signer: "P.Parter",
          lastActivity: "26/08/2018",
          percentComplete: "92%"
        },
        {
          funnelId: 2,
          clientName: "Boothe, Marie",
          taxYear: 2017,
          funnelStatus: 4,
          funnelOpened: "26/08/2018",
          signer: "P.Parter",
          lastActivity: "26/08/2018",
          percentComplete: "92%"
        },
        {
          funnelId: 3,
          clientName: "Boothe, Marie",
          taxYear: 2017,
          funnelStatus: 4,
          funnelOpened: "26/08/2018",
          signer: "P.Parter",
          lastActivity: "26/08/2018",
          percentComplete: "92%"
        }
      ];

      service.getFunnels().subscribe(funnels => {
        expect(funnels.length).toBe(3);
        expect(funnels).toEqual(dummyFunnels);
      });

      const req = httpMock.expectOne(`${service.funnelsUrl}`);
      expect(req.request.method).toBe("GET");
      req.flush(dummyFunnels);
    });
  });
});

